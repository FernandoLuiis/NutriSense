create table capacidade_silos (
    id_silo serial primary key,
    capacidade_silo varchar(255) not null
);

create table nivel_silos (
    id serial primary key,
    codigo_silo varchar(255) not null, 
    nivel decimal not null,
    umidade decimal not null,
    criado_em timestamp default current_timestamp,
    atualizado_em timestamp default current_timestamp,
    constraint fk_codigo_silo foreign key (codigo_silo) references capacidade_silos(id_silo)
);
