<?php

namespace App\Events;

use ApiPlatform\Core\EventListener\EventPriorities;
use App\Entity\Project;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\GetResponseForControllerResultEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Security\Core\Security;

class ProjectUserSubscriber implements EventSubscriberInterface
{
    private $security;
    public function __construct(Security $security)
    {
        $this->security = $security;
    }


    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ['setUserForProject', EventPriorities::PRE_VALIDATE]

        ];
    }
    public function setUserForProject(GetResponseForControllerResultEvent $event)
    {
        $project = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();
        if ($project instanceof Project && $method === "POST") {
            //récupere l'utilisateur connecté
            $user = $this->security->getUser();

            //Assign le user au project que l'on est entrain de creer 
            $project->setUser($user);

            if (empty($project->getCreatedAt())) {
                $project->setCreatedAt(new \DateTime());

                if (empty($project->getUpdateAt())) {
                    $project->setUpdateAt(new \DateTime());
                }
            }
        }
    }
}
