create table capacidade_silos (
    id_silo serial primary key,
    capacidade_silo integer not null
    cd_silo integer not null,
    diametro_inicial_i float not null,
    diametro_final_i float not null,
    diametro_inicial_s float not null,
    diametro_final_s float not null,
    diametro_central float null
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
