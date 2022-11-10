-- generate at: https://supabase-schema.vercel.app/

create table discount (
  id bigint not null primary key,
  created_at timestamp default now(),
  name character not null,
  desc text,
  discount_percent real not null,
  active boolean,
  modified_at timestamp default now(),
  deleted_at timestamp default now()
);

create table product_categories (
  id bigint not null primary key,
  created_at timestamp default now(),
  name character not null,
  desc text,
  modified_at timestamp default now(),
  deleted_at timestamp default now()
);

create table payments (
  id bigint not null primary key,
  created_at timestamp default now(),
  amount numeric,
  status character,
  modified_at timestamp default now(),
  provider character
);

create table product_inventory (
  id bigint not null primary key,
  created_at timestamp default now(),
  quantity bigint,
  modified_at timestamp default now(),
  deleted_at timestamp default now()
);

create table invoices (
  id bigint not null primary key,
  created_at timestamp default now(),
  total numeric,
  tax real,
  id_payment bigint references payments (id)
);

create table products (
  id bigint not null primary key,
  name character not null,
  desc text,
  SKU character not null,
  price numeric not null,
  created_at timestamp default now(),
  modified_at timestamp default now(),
  deleted_at timestamp default now(),
  discount_id bigint references discount (id),
  inventory_id bigint references product_inventory (id),
  categorie_id bigint references product_categories (id)
);

create table companies (
  id bigint not null primary key,
  name character not null,
  website character,
  created_at timestamp default now(),
  modified_at timestamp default now(),
  phone integer
);

create table account_owners (
  id bigint not null primary key,
  created_at timestamp default now(),
  modified_at timestamp default now(),
  deleted_at timestamp default now(),
  company_id bigint references companies (id),
  user_id uuid
);

create table accounts (
  id bigint not null primary key,
  created_at timestamp default now(),
  domain character not null,
  modified_at timestamp default now(),
  deleted_at timestamp default now(),
  company_id bigint references companies (id)
);

create table contracts (
  id bigint not null primary key,
  created_at timestamp default now(),
  purchased timestamp default now(),
  started timestamp default now(),
  finish timestamp default now(),
  product_id bigint references products (id),
  account_id bigint references accounts (id)
);

create table invoice_items (
  id bigint not null primary key,
  created_at timestamp default now(),
  quantity smallint,
  modified_at timestamp default now(),
  invoice_id bigint references invoices (id),
  contracts_id bigint references contracts (id)
);

