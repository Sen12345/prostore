// model Product {
// id String @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
// name String
// slug String @unique(map:"product_slug_idx")
// category String
// description String
// images String[]
// brand String
// stock String
// price Decimal @default(0) @db.Decimal(12,2)
// rating Decimal @default(0) @db.Decimal(3,2)
// numReviews Int @default(0)
// isFeatured Boolean
// banner String?
// createdAt DateTime @default(now()) @db.Timestamp(6)
// }
