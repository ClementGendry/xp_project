<?php
class user {
    
    public $nom = "";
    public $prenom = "";
    public $mail = "";

    function __construct($nom, $prenom, $mail) {
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->mail = $mail;
    }

    function getNom() {
        return $this->nom;
    }

    function getPrenom() {
        return $this->prenom;
    }

    function getMail() {
        return $this->mail;
    }


    
    
    
    
    
    
    
    
    
}
?>