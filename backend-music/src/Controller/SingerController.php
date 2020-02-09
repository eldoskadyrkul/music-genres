<?php


namespace App\Controller;


use App\Service\SingerServiceInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class SingerController
 * @package App\Controller
 */
class SingerController extends AbstractController
{
    private $singerService;

    public function __construct(SingerServiceInterface $singerService)
    {
        $this->singerService = $singerService;
    }

    /**
     * @Route("/singer", methods={"POST"})
     * @return JsonResponse
     */
    public function create(Request $request): JsonResponse {

        $data = json_decode($request->getContent(), true);

        $singer = $this->singerService->create(
            $data["name_singer"],
            $data["name_song"],
            $data["genres_song"],
            $data["year_song"]
        );

        return $this->json($singer);
    }

    /**
     * @Route("/singer", methods={"GET"})
     * @param Request $request
     * @return JsonResponse
     */
    public function getSinger(Request $request): JsonResponse {

        $singer = $this->singerService->getSinger();

        return $this->json($singer);
    }
}
