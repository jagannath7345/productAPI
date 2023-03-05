const product = require("../models/productSchema");

const getAllProduct = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (featured) {
    queryObject.featured = featured;
  }
  let apiData = product.find(queryObject);
  if (sort) {
    const sortData = sort.split(",").join(" ");
    apiData = apiData.sort(sortData);
  }
  if (select) {
    let selectData = select.split(",").join(" ");
    apiData = apiData.select(selectData);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;

  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  const allData = await apiData;
  res.status(200).json({ allData });
};
const getAllProductDemo = async (req, res) => {
  const allData = await product.find(req.query);
  res.status(200).json({ allData });
};

module.exports = { getAllProduct, getAllProductDemo };
