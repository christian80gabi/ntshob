-- This file is automatically generated using maintenance/generateSchemaSql.php.
-- Source: sql/tables.json
-- Do not modify this file directly.
-- See https://www.mediawiki.org/wiki/Manual:Schema_changes
CREATE TABLE /*_*/oathauth_types (
  oat_id INT AUTO_INCREMENT NOT NULL,
  oat_name VARBINARY(255) NOT NULL,
  UNIQUE INDEX oat_name (oat_name),
  PRIMARY KEY(oat_id)
) /*$wgDBTableOptions*/;


CREATE TABLE /*_*/oathauth_devices (
  oad_id INT AUTO_INCREMENT NOT NULL,
  oad_user INT NOT NULL,
  oad_type INT NOT NULL,
  oad_name VARBINARY(255) DEFAULT NULL,
  oad_created BINARY(14) DEFAULT NULL,
  oad_data BLOB DEFAULT NULL,
  INDEX oad_user (oad_user),
  PRIMARY KEY(oad_id)
) /*$wgDBTableOptions*/;
