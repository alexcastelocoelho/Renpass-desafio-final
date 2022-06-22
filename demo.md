create car 
```
{
    "model": "S10 2.8",
    "type": "sedan",
    "brand": "GM",
    "color": "branco",
    "year": "2021",
    "accessories": [
    
        {
        "description": "Air bag"
        },
        {
        "description": "ABS"
        }
    ],
        "passengersQtd": 5     

}

{
    "model": "S10 2.8",
    "type": "fiat",
    "brand": "GM",
    "color": "blue",
    "year": "2021",
    "accessories": [
    
        {
        "description": "Ar-condicionado"
        }
    ],
        "passengersQtd": 5     

}
```


create person 

```
{
  "name": "gustavo campos",
  "cpf": "123.456.789-01",
  "birthday": "10/03/1989",
  "email": "gustavo@gmail.com",
  "password": "qwer123_@",
  "canDrive": "yes"  
  }

{
  "name": "roberta silva",
  "cpf": "123.456.654-01",
  "birthday": "07/03/2001",
  "email": "robertasil@gmail.com",
  "password": "tyu56_@",
  "canDrive": "no" 
}  
```
create token authentication
```
{
  "email": "robertasil@gmail.com",
  "password": "tyu56_@"
} 

{
  "email": "gustavo@gmail.com",
  "password": "qwer123_@"
}
```
create rental

```
{ 
  "name": "Localiza Rent a Car", 
  "cnpj": "16.670.085/0001-55", 
  "activities": "Aluguel de Carros E Gestão de Frotas", 
  "address": [ 
    { 
    "cep": "96200-200", 
    "number":"1234",
    "isFilial": false 
    } 
  ] 
}
```

create reserve 

```
{ 

  "id_user": "b149e5bda4f24123g34396a07fd3098", 
  "data_start": "20/11/2021", 
  "data_end": "30/11/2021", 
  "id_car": "b149e5bda4f24e25a12d396a45645398", 
  "id_rental": "b149e5bda345232e25a12d396a07fd3098", 
  "final_value": "500,00", 

}
```

create fleet

```
{ 

  "id_car": "b149e5bdggg34396a07fd3098",
  "id_rental":"asdasda149e5bdagga12d396a07fd3098", 
  "status": "available", 
  "daily_value": "100,00",
  "plate": "ABC1234", 

} 

```