function responseHandler(req, res, next) {
  const oldSend = res.send;

  res.send = function (data) {
    // Restaurar el método send original para evitar problemas de recursividad
    res.send = oldSend;

    // Asegurarse de que data sea un objeto y no una cadena JSON
    let resultData;
    try {
      // Intentar parsear si data es una cadena que representa un objeto JSON
      resultData = typeof data === "string" ? JSON.parse(data) : data;
    } catch (e) {
      // Si hay un error en el parseo, usar data tal cual
      resultData = data;
    }

    // Crear el objeto de respuesta
    const responseData = {
      requestId: req.requestId, // Asegúrate de que este valor se establece en algún middleware anterior
      statusCode: res.statusCode,
      timestamp: new Date().toISOString(),
      result: resultData,
    };

    // Enviar la respuesta final formateada
    return res.send(responseData);
  };

  next();
}

module.exports = responseHandler;
