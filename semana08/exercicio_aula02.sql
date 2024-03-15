create table locais (
	id serial primary key,
	nome varchar(200) not null,
	endereco varchar(200) not null,
	capacidade int not null,
	check(capacidade >= 1)
);

create table eventos (
	id serial primary key,
	nome varchar(200) not null,
	data date not null,
	ativo boolean not null default true,
	local_id int,
	check(data > current_date),
	foreign key (local_id) references locais (id)
);

insert into locais (nome, endereco, capacidade) values 
('P12', 'Jurere Internacional', 15000),
('Indaiá Eventos', 'Lagoa', 150),
('Fazendinha Eventos', 'Biguacu', 250);

insert into eventos (nome, data, local_id, ativo) values
('Niver Casamento', '15-04-2024', 1, true),
('Show Jotaquest', '07-06-2024', 1, true);

select * from locais;
select * from eventos;

select
l.nome as nome_local,
l.endereco as endereco_local,
l.capacidade,
e.nome as nome_evento,
e.data,
e.ativo
from locais as l inner join eventos as e on l.id = e.local_id; 
