import React from "react";
import { Form, Button } from "react-bootstrap";

const FormularioTarea = () => {
  return (
    <div>
      <Form className="my-5">
        <Form.Group className="mb-3 d-flex" controlId="formTarea">
          {/* {input} */}
          <Form.Control type="text" placeholder="Ingresa una tarea" />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FormularioTarea;
