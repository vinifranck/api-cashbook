const movimentoModel = require("../models/movimentModel");

exports.post = async (data, idUser) => {
  return await movimentoModel.post(data, idUser);
};
exports.get = async () => {
  return await movimentoModel.get();
};

exports.put = async (req, res) => {
  return await movimentoModel.put(data, idUser);
};
exports.delete = async (id) => {
  return await movimentoModel.delete(id, idUser);
};

exports.getCashBalance = async () => {
  return await movimentoModel.getCashBalance();
};

exports.movIo = async () => {
  return await movimentoModel.movIo();
};
exports.movYearMonth = async (data) => {
  return await movimentoModel.movYearMonth(data);
};
exports.movIOYearMonth = async (data) => {
  return await movimentoModel.movIOYearMonth(data);
};
exports.movIOYearMonthMonthYear = async (data) => {
  return await movimentoModel.movIOYearMonthMonthYear(data);
};
