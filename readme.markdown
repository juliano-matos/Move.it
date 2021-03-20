módulo . exportações  =  função  ( pacote )  {
    var  m ;
    if  ( m  =  match ( JSON . stringify ( pacote . repositório ) ) )  {
        return  m ;
    }
    else  if  ( m  =  match ( JSON . stringify ( pkg ) ) )  {
        return  m ;
    }
    retornar  indefinido ;
} ;

function  match  ( str )  {
    var  m  =  / \ b github.com [ : \ / ] ( [ ^ \ / " ] + ) \ / ( [ ^ \ / " ] + ) / . exec ( str ) ;
    if  ( m )  {
        retorne  'https://github.com/'  +  m [ 1 ]  +  '/'  +  m [ 2 ] . substituir ( / \. git $ / ,  '' ) ;
    }
}
