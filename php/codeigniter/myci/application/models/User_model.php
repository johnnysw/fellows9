<?php
    class User_model extends CI_Model
    {
        public function get_by_username_pwd($un, $pwd){
            return $this -> db -> get_where("user", array(
                "username" => $un,
                "password" => $pwd
            )) -> row();

        }

        public function get_all(){
            return $this -> db -> get("user") -> result();
        }

        public function get_by_username($username){
            return $this -> db -> get_where("user", array("username"=>$username)) -> row();
        }

        public function save_user($username, $password){
            $this -> db -> insert("user", array(
                "username" => $username,
                "password" => $password
            ));
            return $this->db->affected_rows();
        }

        public function del_user($id){
            $this->db->delete('user', array('user_id' => $id));
            return $this->db->affected_rows();
        }

        public function get_by_id($id){
            return $this -> db -> get_where("user", array("user_id" => $id)) -> row();
        }

        public function update_user($id, $un, $pwd){
            $this->db->where('user_id', $id);
            $this->db->update('user', array(
                "username" => $un,
                "password" => $pwd
            ));
            return $this->db->affected_rows();
        }
    }




?>