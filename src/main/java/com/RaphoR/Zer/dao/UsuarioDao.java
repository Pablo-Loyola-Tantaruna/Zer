package com.RaphoR.Zer.dao;

import com.RaphoR.Zer.models.Usuario;

import java.util.List;

public interface UsuarioDao {
    List<Usuario> getUsuario();

    void eliminar(Long id);

    void register(Usuario usuario);

    Usuario ObtenerUsuarioPorCredenciales(Usuario usuario);
}
