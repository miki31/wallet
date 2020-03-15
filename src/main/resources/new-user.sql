CREATE USER family_wallet_admin_db WITH ENCRYPTED PASSWORD 'WalletMashaAdmin';
create database family_wallet_db WITH ENCODING 'utf8';
GRANT ALL PRIVILEGES ON DATABASE family_wallet_db TO family_wallet_admin_db;

