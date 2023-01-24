import { SanityImageAssetDocument } from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";
import { SanityAsset, SanityImageObject, SanityReference } from "@sanity/image-url/lib/types/types";
import { sanityConfig } from "./sanity-config";

export const imageBuilder = createImageUrlBuilder(sanityConfig);

export const urlForImage = (source: string | SanityReference | SanityAsset | SanityImageObject | SanityImageAssetDocument) => imageBuilder.image(source).auto("format").fit("max");
