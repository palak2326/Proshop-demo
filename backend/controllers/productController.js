import asyncHandler from '../middleware/asyncHandler.js'
import Product from '../models/productModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  // throw new Error('Some Error')
  res.json(products)
})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    return res.json(product)
  }
  res.status(404)
  throw new Error('Resource not found')
})

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private

export { getProducts, getProductById }
