create database BdIndividual;

use BdIndividual;

create table Usuario(
idUsuario int primary key auto_increment,
nome varchar (40) not null,
email varchar (40) check(email like '%@%'),
senha varchar (20) not null
)auto_increment=1;

create table Pontuacao(
idPontuacao int primary key, 
acertos int not null,
erros int not null,
fkUsuario int, foreign key (fkUsuario) references Usuario(idUsuario) 
);

create table Mensagem(
idMensagem int primary key,
email varchar (40) not null check (email like '%@%'),
texto varchar (200) not null,
fkMsgUsuario int, foreign key (fkMsgUsuario) references Usuario(idUsuario)
);
