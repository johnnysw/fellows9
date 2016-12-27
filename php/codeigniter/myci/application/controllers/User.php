<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this -> load -> model("user_model");
	}

	public function index()
	{
		$this->load->view('login');
	}

	public function login(){
		$login = $this -> input -> post("login");
		$regist = $this -> input -> post("regist");
		if($login){//登录
			$username = $this -> input -> post("username");
			$password = $this -> input -> post("password");

			$row = $this -> user_model -> get_by_username_pwd($username, $password);
			if($row){
				redirect("user/user_list");
			}else{
				echo "fail";
			}

		}else{//注册
			$this -> load -> view("regist");
		}
	}

	public function user_list(){
		$user_list = $this -> user_model -> get_all();
		$this->load->view('list', array("list" => $user_list));
	}


	public function check_username(){
		$username = $this -> input -> get("username");
		$user = $this -> user_model -> get_by_username($username);
		if($user){
			echo "fail";
		}else{
			echo "success";
		}
	}

	public function regist(){
		$username = $this -> input -> post("username");
		$password = $this -> input -> post("password");

		$rows = $this -> user_model -> save_user($username, $password);
		if($rows > 0){
			redirect("user/index");
		}else{
			echo "fail";
		}
	}

	public function change(){
		$user_id = $this -> input -> get("userid");
		$user = $this -> user_model -> get_by_id($user_id);
		$this -> load -> view("change", array("user"=>$user));

	}
	public function update_user(){
		$user_id = $this -> input -> post("user_id");
		$username = $this -> input -> post("username");
		$password = $this -> input -> post("password");

		$rows = $this -> user_model -> update_user($user_id, $username, $password);
		if($rows > 0){
			redirect("user/user_list");
		}else{
			echo "fail";
		}
	}
	public function  delete(){
		$user_id = $this -> input -> get("userid");
		$rows = $this -> user_model -> del_user($user_id);
		if($rows > 0){
			redirect("user/user_list");
		}else{
			echo "fail";
		}
	}


}
