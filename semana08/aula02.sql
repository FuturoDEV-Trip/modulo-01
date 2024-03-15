create table autores (
	id serial primary key,
	nome varchar(200) not null,
	nacionalidade varchar(200) not null,
	ano_nascimento int not null
);

create table editoras (
	id serial primary key,
	nome varchar(200) not null,
	pais varchar(100) not null,
	fundacao date not null
);

create table biblioteca (
	id serial primary key,
	nome varchar(100) not null,
	cidade varchar(100) not null
);

create table livros (
	id serial primary key,
	titulo varchar(100) not null,
	ano_publicacao int not null,
	autor_id int not null,
	editora_id int not null,
	biblioteca_id int,
	foreign key (autor_id) references autores (id),
	foreign key (editora_id) references editoras (id),
	foreign key (biblioteca_id) references biblioteca (id)
);

--drop table livros

select * from autores;
select * from editoras;
select * from biblioteca;
select * from livros;

-- AUTORES
insert into autores (nome, nacionalidade, ano_nascimento) values ('Bruno', 'Brasileira', 1999);
insert into autores (nome, nacionalidade, ano_nascimento) values ('Camões', 'Portuguesa', 1860);
insert into autores (nome, nacionalidade, ano_nascimento) values ('Drumont', 'Brasileira', 1960);
insert into autores (nome, nacionalidade, ano_nascimento) values ('Clarice', 'Brasileira', 1970);

-- EDITORAS
insert into editoras (nome, pais, fundacao) values ('Abril', 'Brasil', '1980-01-01');
insert into editoras (nome, pais, fundacao) values ('Saraiva', 'Brasil', '1970-01-01');
insert into editoras (nome, pais, fundacao) values ('Novatech', 'Brasil', '1960-01-01');

-- BIBLIOTECAS
insert into biblioteca (nome, cidade) values ('Biblioteca Estadual Catarinense', 'Floripa');
insert into biblioteca (nome, cidade) values ('Biblioteca Estadual Cearense', 'Fortaleza');
insert into biblioteca (nome, cidade) values ('Biblioteca Estadual Paulista', 'São Paulo');
insert into biblioteca (nome, cidade) values ('Biblioteca Estadual Carioca', 'Rio de Janeiro');

-- LIVROS
insert into livros (titulo, ano_publicacao, autor_id, editora_id, biblioteca_id)
values ('O que é POO', 2020, 1, 2, null);
insert into livros (titulo, ano_publicacao, autor_id, editora_id, biblioteca_id)
values ('O que é Javascript', 2023, 2, 1, 1);
insert into livros (titulo, ano_publicacao, autor_id, editora_id, biblioteca_id)
values ('O que é PHP', 2023, 2, 2, 1);
insert into livros (titulo, ano_publicacao, autor_id, editora_id, biblioteca_id)
values ('Como trabalhar com testes unitários', 2024, 3, 3, 2);
insert into livros (titulo, ano_publicacao, autor_id, editora_id, biblioteca_id)
values ('Entendendo TDD', 2010, 2, 1, 4);
insert into livros (titulo, ano_publicacao, autor_id, editora_id, biblioteca_id)
values ('HTML e CSS', 2019, 1, 3, null);


-- INNER JOIN
select * from livros as l inner join biblioteca as b
on l.biblioteca_id = b.id
select * from livros as l left join biblioteca as b
on l.biblioteca_id = b.id
select * from livros as l right join biblioteca as b
on l.biblioteca_id = b.id