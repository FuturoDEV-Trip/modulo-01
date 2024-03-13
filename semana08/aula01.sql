-- 	COMANDOS DDL	
-- serve para criar tables ou databases

-- comando para criar tabela
create table Produto (
	id serial primary key,
	nome varchar(200) not null,
	codigoBarras int not null unique,
	preco decimal(18, 4) not null default 1.99,
	quantidade int not null,
	check(preco > 0)
	--check(quantidade > 0 and quantidade <= 100)
);

-- apagar a tabela
drop table Produto;

-- alterar a tabela
alter table Produto add column marca varchar(200) not null;
-- apagar uma coluna
alter table Produto drop column marca;
alter table Produto drop column codigobarras;





-- COMANDOS DML
-- servem para manipular os dados
select * from Produto
select * from Produto where preco = 2.5
select * from Produto where nome like '%Faber%'

-- adicionar dados a tabela
insert into Produto (nome, preco, quantidade) 
values ('Grafite 0.7', 3.5, 10)

-- atualizar dados
update Produto set nome = 'Grafite Faber Castell 0.7'
where id = 11

-- deletar um registro
delete from Produto where id = 4