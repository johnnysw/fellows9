var ImgFigure = React.createClass({
    handleClick: function(){
        //如果是居中就翻转，否则就居中
        if(this.props.data.isCenter){
            this.props.inverse();
        }else{
            this.props.center();
        }
    },
    render : function(){
        var styleObj = {
            top :  this.props.data.pos.y,
            left : this.props.data.pos.x,
            transform : "rotate(" + this.props.data.rotate + "deg)"
        };
        if(this.props.data.isInverse){
            styleObj.transform = "rotateY(180deg)";
        }
        return (
            <div className="img-figure" style={styleObj} onClick={this.handleClick}>
                <img src={"imgs/" + this.props.info.fileName}/>
                <h2>{this.props.info.title}</h2>
                <div>{this.props.info.desc}</div>
            </div>
        );
    }
});

var Controller = React.createClass({
    handleClick : function(){
        if(this.props.data.isCenter){
            this.props.inverse();
        }else{
            this.props.center();
        }
    },
    render : function(){
        var ctrlClassName = "controller"
        if(this.props.data.isCenter){
            ctrlClassName += " is-center";
            if(this.props.data.isInverse){
                ctrlClassName += " is-inverse";
            }
        }
        return (
            <span className={ctrlClassName} onClick={this.handleClick}></span>
        );
    }
});

var Photowall = React.createClass({
    const : {
        centerPos : {
            x : 0,
            y : 0
        },
        xLeftMin : 0,
        xLeftMax : 0,
        xRigthMin : 0,
        xRightMax : 0,
        yMin : 0,
        yMax : 0
    },
    getInitialState : function(){
        return {
            imgFigureArr : [{
                pos : {
                    x : 0,
                    y : 0
                },
                rotate : 0,
                isCenter : false,
                isInverse : false
            }]
        };
    },
    //render以后执行的函数
    componentDidMount : function(){
        //取出舞台的DOM，计算宽高
        var stageDOM = this.refs.stage,
            stageW = stageDOM.offsetWidth,
            stageH = stageDOM.offsetHeight,
            stageWHalf = stageW / 2,
            stageHHalf = stageH / 2;
        //取出图片的DOM，计算宽高
        var imgFigureDOM = ReactDOM.findDOMNode(this.refs.imgFigure),
            imgFigureW = imgFigureDOM.offsetWidth,
            imgFigureH = imgFigureDOM.offsetHeight,
            imgFigureWHalf = imgFigureW / 2,
            imgFigureHHalf = imgFigureH / 2;

        this.const = {
            centerPos : {
                x : stageWHalf - imgFigureWHalf,
                y : stageHHalf - imgFigureHHalf
            },
            xLeftMin : -imgFigureWHalf,
            xLeftMax : stageWHalf - imgFigureWHalf * 3,
            xRigthMin : stageWHalf + imgFigureWHalf,
            xRightMax : stageW - imgFigureWHalf,
            yMin : -imgFigureWHalf,
            yMax : stageH - imgFigureHHalf
        };
        this.rearrage(0);
    },
    //让centerIdx对应的图片居中显示，其他图片随机在两侧
    rearrage : function(centerIdx){
        //根据取值范围计算坐标
        var imgFigureArr = this.state.imgFigureArr;
        
        for(var i=0; i<imgFigureArr.length; i++){
            if(i < imgFigureArr.length / 2){
                imgFigureArr[i].pos = {
                    x : getRangeRandom(this.const.xLeftMin, this.const.xLeftMax),
                    y : getRangeRandom(this.const.yMin, this.const.yMax)
                }
            }else{
                imgFigureArr[i].pos = {
                    x : getRangeRandom(this.const.xRigthMin, this.const.xRightMax),
                    y : getRangeRandom(this.const.yMin, this.const.yMax)
                }
            }
            imgFigureArr[i].rotate = getRangeRandom(-30, 30);
            imgFigureArr[i].isCenter = false;
            imgFigureArr[i].isInverse = false;
        }
        imgFigureArr[centerIdx].pos = {
            x : this.const.centerPos.x,
            y : this.const.centerPos.y
        };
        imgFigureArr[centerIdx].rotate = 0;
        imgFigureArr[centerIdx].isCenter = true;

        this.setState({
            imgFigureArr : imgFigureArr
        });
    },
    //闭包，居中方法
    center : function(centerIdx){
        return function(){
            this.rearrage(centerIdx);
        }.bind(this);
    },
    //旋转方法
    inverse : function(centerIdx){
        return function(){
            this.state.imgFigureArr[centerIdx].isInverse = !this.state.imgFigureArr[centerIdx].isInverse;
            this.setState({
                imgFigureArr : this.state.imgFigureArr
            });
        }.bind(this);
    },
    render : function(){
        var imgFigureArr = [];
        var contorllerArr = []
        imgDatas.forEach(function(value, index){
            //初始化state里的imgFigureArr值
            if(!this.state.imgFigureArr[index]){
                this.state.imgFigureArr[index] = {
                    pos : {
                        x : 0,
                        y : 0
                    },
                    rotate : 0,
                    isCenter : false,
                    isInverse : false
                };
            }

            imgFigureArr.push(<ImgFigure key={index} info={value} ref="imgFigure" 
                data={this.state.imgFigureArr[index]} center={this.center(index)} 
                inverse={this.inverse(index)}/>);
            contorllerArr.push(<Controller key={index} data={this.state.imgFigureArr[index]} center={this.center(index)} 
                inverse={this.inverse(index)}/>);
        }.bind(this));
        return (
            <div className="stage" ref="stage">
                <div>{imgFigureArr}</div>
                <div className="nav">{contorllerArr}</div>
            </div>
        );
    }
});

ReactDOM.render(
    <Photowall />,
    document.getElementById("photowall")
);

function getRangeRandom(low, high){
    return Math.ceil(Math.random() * (high - low) + low);
}
