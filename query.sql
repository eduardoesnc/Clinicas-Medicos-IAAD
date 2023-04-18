drop schema if exists clinicasmedicas;
create schema clinicasmedicas;
use clinicasmedicas;

CREATE TABLE Clinica(
    CodCli CHAR(7) NOT NULL,
    NomeCli VARCHAR(40) NOT NULL,
    Endereco varchar(50),
    Telefone CHAR(16),
    Email varchar(40),
    primary key (CodCli)
);

create table Medico(
	CodMed char(7),
    NomeMed Varchar (40) NOT NULL,
    Genero char(1),
    Telefone char(16),
    Email Varchar(40),
    primary key (CodMed),
    UNIQUE (Email)
);

create table ClinicaMedico (
	CodCli char(7) Not Null,
    CodMed char(7) Not Null,
    DataIngresso DATE Not Null,
    CargaHorariaSemanal DECIMAL(3,1) default 20.0,
    primary key(CodCli, CodMed)
);

alter table ClinicaMedico add foreign key(CodCli) references Clinica(CodCli);
alter table ClinicaMedico add foreign key(CodMed) references Medico(CodMed) ON DELETE CASCADE;

INSERT INTO Clinica VALUES ('9999999', 'Clínica Sede', 'Av. 17 de Agosto', '(81) 2658-7561', 'clinicasede@email.com');

DELIMITER $$
CREATE TRIGGER Gatilho_IAAD AFTER INSERT ON Medico
FOR EACH ROW
BEGIN
	INSERT INTO ClinicaMedico VALUES ('9999999', NEW.CodMed, now(), DEFAULT);
END $$

commit;