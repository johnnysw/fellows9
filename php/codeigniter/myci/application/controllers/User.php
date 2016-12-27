<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {


	public function index()
	{
		$this->load->view('login');
	}

	public function login(){
		$username = $this -> input -> post("username");
		$password = $this -> input -> post("password");
		echo $username . "-" . $password;
	}


}
