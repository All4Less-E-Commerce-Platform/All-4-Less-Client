// const { sequelize } = require('@/db/connection');
const { sequelize } = require('../db_connection');
const { DataTypes } = require('sequelize');

const Products = sequelize.define('Product', {
  productId: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  rankId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  minPromotionPrice: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  salesCount: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  transactionLevel: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  responseRate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  companyName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  discount: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  videoId: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  moq: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  promotionMoq: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  freeShipping: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  warranty: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  freightPrice: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  images: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
  isAssessedSupplierPro: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  productCertificates: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  p4p: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  tradeAssurance: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  clickParam: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  detailWap: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  companyId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  traceInfo: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
  maxPromotionPrice: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  minPrice: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  maxPrice: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  totalEmployees: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  goldSupplierYears: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  afterService: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  realCtrParam: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  onlineCustomizeMinShippingDate: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  eurl: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  promotionPrice: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  contactSupplierLink: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  customization: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  aliMemberId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  companyUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  firstCategoryId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  productSellingPoint2dCustomizationText: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  transactionGmv6Months: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  supportSevenDaysSample: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  transactionCount6Months: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  shippingTime: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  goldSupplier: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  companyStar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  views: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  trackInfo: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  moqUnit: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  companyLogo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  interveneCompanyVideoPoster: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rts: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  assessedSupplier: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  companyProfileUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  supportProduceSample: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  companyAbility: {
    type: DataTypes.JSONB,
    defaultValue: [],
  },
  atomoTags: {
    type: DataTypes.JSONB,
    defaultValue: [],
  },
  industryTags: {
    type: DataTypes.JSONB,
    defaultValue: [],
  },
});

module.exports = Products;
