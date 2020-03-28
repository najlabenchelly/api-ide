<?php 
namespace App\Doctrine;

use ApiPlatform\Core\Bridge\Doctrine\Orm\Extension\QueryCollectionExtensionInterface;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Extension\QueryItemExtensionInterface;

class CurrentUserExtension implements QueryCollectionExtensionInterface, QueryItemExtensionInterface {
    public function applyToCollection(\Doctrine\ORM\QueryBuilder $queryBuilder, \ApiPlatform\Core\Bridge\Doctrine\Orm\Util\QueryNameGeneratorInterface $queryNameGenerator, string $resourceClass, ?string $operationName = null)
    {
        
    }
public function applyToItem(\Doctrine\ORM\QueryBuilder $queryBuilder, \ApiPlatform\Core\Bridge\Doctrine\Orm\Util\QueryNameGeneratorInterface $queryNameGenerator, string $resourceClass, array $identifiers, ?string $operationName = null, array $context = [])
{
    
}
    
}