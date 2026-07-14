import { i as getProduct } from "./products-BA9_wfGS.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/product.$id.tsx
var $$splitComponentImporter = () => import("./product._id-C4rwLR0C.js");
var Route = createFileRoute("/product/$id")({
	head: ({ params }) => ({ meta: [
		{ title: `${getProduct(params.id).name} — ManaCouture` },
		{
			name: "description",
			content: `${getProduct(params.id).name}. ${getProduct(params.id).fabric}. Handwoven in Kerala.`
		},
		{
			property: "og:title",
			content: `${getProduct(params.id).name} — ManaCouture`
		},
		{
			property: "og:image",
			content: getProduct(params.id).image
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
