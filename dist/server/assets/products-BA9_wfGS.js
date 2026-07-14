//#region src/assets/hero-saree.jpg
var hero_saree_default = "/assets/hero-saree-Dm_Y86zH.jpg";
//#endregion
//#region src/assets/bridal.jpg
var bridal_default = "/assets/bridal-BnFgU46i.jpg";
//#endregion
//#region src/assets/kasavu.jpg
var kasavu_default = "/assets/kasavu-TAsCunPx.jpg";
//#endregion
//#region src/assets/setmundu.jpg
var setmundu_default = "/assets/setmundu-J0Oqy6Ya.jpg";
//#endregion
//#region src/assets/kurti.jpg
var kurti_default = "/assets/kurti-Bo8raI1v.jpg";
//#endregion
//#region src/assets/salwar.jpg
var salwar_default = "/assets/salwar-CLCxfiI2.jpg";
//#endregion
//#region src/assets/dupatta.jpg
var dupatta_default = "/assets/dupatta-BzIww8S3.jpg";
//#endregion
//#region src/assets/accessories.jpg
var accessories_default = "/assets/accessories-D1HBGbLS.jpg";
//#endregion
//#region src/lib/products.ts
var assets = {
	hero: hero_saree_default,
	bridal: bridal_default,
	kasavu: kasavu_default,
	setmundu: setmundu_default,
	kurti: kurti_default,
	salwar: salwar_default,
	dupatta: dupatta_default,
	accessories: accessories_default,
	festival: "/assets/festival-CbCyuaE0.jpg"
};
var categories = [
	{
		slug: "kerala-sarees",
		name: "Kerala Sarees",
		image: hero_saree_default,
		count: 128
	},
	{
		slug: "kasavu",
		name: "Kasavu Collection",
		image: kasavu_default,
		count: 64
	},
	{
		slug: "bridal",
		name: "Bridal Collection",
		image: bridal_default,
		count: 42
	},
	{
		slug: "set-mundu",
		name: "Set Mundu",
		image: setmundu_default,
		count: 38
	},
	{
		slug: "kurtis",
		name: "Kurtis",
		image: kurti_default,
		count: 96
	},
	{
		slug: "salwar",
		name: "Salwar Sets",
		image: salwar_default,
		count: 72
	},
	{
		slug: "dupattas",
		name: "Dupattas",
		image: dupatta_default,
		count: 54
	},
	{
		slug: "accessories",
		name: "Accessories",
		image: accessories_default,
		count: 88
	}
];
var products = [
	{
		id: "aiswarya",
		name: "Aiswarya Kasavu Saree",
		category: "Kerala Sarees",
		price: 8499,
		compareAt: 10999,
		image: hero_saree_default,
		hoverImage: kasavu_default,
		fabric: "Pure Kanchi Cotton",
		color: "Ivory",
		occasion: "Festival",
		rating: 4.9,
		reviews: 214,
		badge: "Best Seller",
		stock: 12,
		isNew: true
	},
	{
		id: "meenakshi",
		name: "Meenakshi Bridal Silk",
		category: "Bridal",
		price: 34999,
		compareAt: 42e3,
		image: bridal_default,
		hoverImage: hero_saree_default,
		fabric: "Kanchipuram Silk",
		color: "Cream & Maroon",
		occasion: "Wedding",
		rating: 5,
		reviews: 96,
		badge: "Bridal",
		stock: 4
	},
	{
		id: "onam",
		name: "Onam Traditional Kasavu",
		category: "Kasavu",
		price: 5299,
		image: kasavu_default,
		hoverImage: hero_saree_default,
		fabric: "Handloom Cotton",
		color: "Off-White",
		occasion: "Onam",
		rating: 4.8,
		reviews: 187,
		stock: 20,
		isNew: true
	},
	{
		id: "devika",
		name: "Devika Set Mundu",
		category: "Set Mundu",
		price: 6799,
		compareAt: 7999,
		image: setmundu_default,
		hoverImage: kasavu_default,
		fabric: "Cotton Silk",
		color: "Ivory & Gold",
		occasion: "Temple",
		rating: 4.7,
		reviews: 143,
		stock: 15
	},
	{
		id: "riya",
		name: "Riya Embroidered Kurti",
		category: "Kurtis",
		price: 2299,
		image: kurti_default,
		hoverImage: salwar_default,
		fabric: "Chanderi Silk",
		color: "Cream",
		occasion: "Casual",
		rating: 4.6,
		reviews: 258,
		stock: 30
	},
	{
		id: "nayana",
		name: "Nayana Anarkali Set",
		category: "Salwar Sets",
		price: 4599,
		compareAt: 5999,
		image: salwar_default,
		hoverImage: kurti_default,
		fabric: "Georgette",
		color: "Ivory Gold",
		occasion: "Reception",
		rating: 4.8,
		reviews: 172,
		stock: 18
	},
	{
		id: "swarna",
		name: "Swarna Silk Dupatta",
		category: "Dupattas",
		price: 1899,
		image: dupatta_default,
		hoverImage: accessories_default,
		fabric: "Mulberry Silk",
		color: "Gold",
		occasion: "Festival",
		rating: 4.7,
		reviews: 132,
		stock: 25
	},
	{
		id: "lakshmi",
		name: "Lakshmi Temple Jewelry",
		category: "Accessories",
		price: 3499,
		compareAt: 4200,
		image: accessories_default,
		hoverImage: dupatta_default,
		fabric: "22K Gold Plated",
		color: "Antique Gold",
		occasion: "Bridal",
		rating: 4.9,
		reviews: 201,
		stock: 22,
		isNew: true
	}
];
var getProduct = (id) => products.find((p) => p.id === id) ?? products[0];
var formatINR = (n) => new Intl.NumberFormat("en-IN", {
	style: "currency",
	currency: "INR",
	maximumFractionDigits: 0
}).format(n);
//#endregion
export { products as a, getProduct as i, categories as n, formatINR as r, assets as t };
