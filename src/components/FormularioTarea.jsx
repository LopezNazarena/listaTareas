import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTarea";

const FormularioTarea = () => {
  // zona donde agregamos la mayoria de la logica
  const [tarea, setTarea] = useState([]);
  const [arregloTareas, setArregloTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // arregloTareas.push() no puedo usar el push en un state
    setArregloTareas([...arregloTareas, tarea]);
    //limpiar el input
    setTarea("");
  };

  const borrarTarea = (nombre) => {
    let arregloModificado = arregloTareas.filter((item) => item !== nombre);
    // actualizar state
    setArregloTareas(arregloModificado);
  };

  return (
    <>
      <Form className="my-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formTarea">
          {/* {input} */}
          <Form.Control
            type="text"
            placeholder="Ingresa una tarea"
            onChange={(e) => setTarea(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea
        arregloTareas={arregloTareas}
        borrarTarea={borrarTarea}
      ></ListaTarea>
    </>
  );
};

export default FormularioTarea;
