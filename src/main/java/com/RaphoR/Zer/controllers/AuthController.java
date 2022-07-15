package com.RaphoR.Zer.controllers;

import com.RaphoR.Zer.dao.UsuarioDao;
import com.RaphoR.Zer.models.Usuario;
import com.RaphoR.Zer.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private UsuarioDao usuarioDao;

    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public String login(@RequestBody Usuario usuario){

        Usuario logeado= usuarioDao.ObtenerUsuarioPorCredenciales(usuario);

        if(logeado!=null){
            String token=jwtUtil.create(String.valueOf(logeado.getId()), logeado.getEmail());
            return token;
        }

        return "FAIL";
    }
}
