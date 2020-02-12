<?php


namespace App\Controller;


use App\Service\SingerService;
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

    public function __construct(SingerService $singerService)
    {
        $this->singerService = $singerService;
    }

    /**
     * @Route("/singer/add/{$singer}", methods={"POST"})
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

    /**
     * @Route("/singer/name_singer/{name}", methods={"PATCH"})
     * @param Request $request
     * @param string $name
     * @return JsonResponse
    */
    public function orderName(string $name): JsonResponse {
        $singer = $this->singerService->orderByName($name);

        return $this->json($singer);
    }

    /**
     * @Route("/singer/genres_song/{name}", methods={"PATCH"})
     * @param Request $request
     * @param string $name
     * @return JsonResponse
    */
    public function orderGenres(string $name): JsonResponse {
        $singer = $this->singerService->orderByGenres($name);

        return $this->json($singer);
    }

    /**
     * @Route("/singer/years_song/{name}", methods={"PATCH"}, name="dm_paginate")
     * @param Request $request
     * @param string $name
     * @return JsonResponse
    */
    public function orderYears(string $name): JsonResponse {
        $singer = $this->singerService->orderByYears($name);

        return $this->json($singer);
    }

    /**
     *
     * @Route("/singer/paginate/{page}{limit}", methods={PATCH})
     * @param Request $request
     * @param int $page
     * @param int $limit
     * @return JsonResponse
     *
    public function paginate(int $page, int $limit = 10)
    {
        $singer = $this->singerService->paginate($page, $limit);

        return $this->json($singer);
    }
    */
}
