// generate at: https://supabase-schema.vercel.app/

interface Discount {
  id: number /* primary key */;
  created_at?: string;
  name: any; // type unknown;
  desc?: string;
  discount_percent: any; // type unknown;
  active?: boolean;
  modified_at?: string;
  deleted_at?: string;
}

interface Product_categories {
  id: number /* primary key */;
  created_at?: string;
  name: any; // type unknown;
  desc?: string;
  modified_at?: string;
  deleted_at?: string;
}

interface Payments {
  id: number /* primary key */;
  created_at?: string;
  amount?: any; // type unknown;
  status?: any; // type unknown;
  modified_at?: string;
  provider?: any; // type unknown;
}

interface Product_inventory {
  id: number /* primary key */;
  created_at?: string;
  quantity?: number;
  modified_at?: string;
  deleted_at?: string;
}

interface Invoices {
  id: number /* primary key */;
  created_at?: string;
  total?: any; // type unknown;
  tax?: any; // type unknown;
  id_payment?: number /* foreign key to payments.id */;
  payments?: Payments;
}

interface Products {
  id: number /* primary key */;
  name: any; // type unknown;
  desc?: string;
  SKU: any; // type unknown;
  price: any; // type unknown;
  created_at?: string;
  modified_at?: string;
  deleted_at?: string;
  discount_id?: number /* foreign key to discount.id */;
  inventory_id?: number /* foreign key to product_inventory.id */;
  categorie_id?: number /* foreign key to product_categories.id */;
  discount?: Discount;
  product_inventory?: Product_inventory;
  product_categories?: Product_categories;
}

interface Companies {
  id: number /* primary key */;
  name: any; // type unknown;
  website?: any; // type unknown;
  created_at?: string;
  modified_at?: string;
  phone?: any; // type unknown;
}

interface Account_owners {
  id: number /* primary key */;
  created_at?: string;
  modified_at?: string;
  deleted_at?: string;
  company_id?: number /* foreign key to companies.id */;
  user_id?: string;
  companies?: Companies;
}

interface Accounts {
  id: number /* primary key */;
  created_at?: string;
  domain: any; // type unknown;
  modified_at?: string;
  deleted_at?: string;
  company_id?: number /* foreign key to companies.id */;
  companies?: Companies;
}

interface Contracts {
  id: number /* primary key */;
  created_at?: string;
  purchased?: string;
  started?: string;
  finish?: string;
  product_id?: number /* foreign key to products.id */;
  account_id?: number /* foreign key to accounts.id */;
  products?: Products;
  accounts?: Accounts;
}

interface Invoice_items {
  id: number /* primary key */;
  created_at?: string;
  quantity?: number;
  modified_at?: string;
  invoice_id?: number /* foreign key to invoices.id */;
  contracts_id?: number /* foreign key to contracts.id */;
  invoices?: Invoices;
  contracts?: Contracts;
}
