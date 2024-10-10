create table nivel_silos (
    id serial primary key,
    codigo_silo varchar(255) not null,
    nivel decimal not null,
    umidade decimal not null,
    criado_em timestamp default current_timestamp,
    atualizado_em timestamp default current_timestamp
);
