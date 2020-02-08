<?php
declare(strict_types=1);

namespace App\Service;

use App\Entity\Singer;
use App\Repository\SingerRepositoryInterface;

 class SingerService implements SingerServiceInterface
 {

 	private $repository;

 	function __construct(SingerRepositoryInterface $repo)
 	{
 		$this->repository = $repo;
 	}

 	/**
	* @param string $name_singer
	* @param string $name_song
	* @param string $genres_song
	* @param int $year_song
	* @return Singer
	*/
	public function create(string $name_singer, string $name_song, string $genres_song, int $year_song): Singer
    {
       	$singer = new Singer($name_singer, $name_song, $genres_song, $year_song);

       	$this->repository->save($singer);

       	return $singer;
    }

	/**
	* @param @name string
	* @return Singer
	*/
	public function orderByName(string $name): Singer
	{

		$singer = $this->repository->orderByName($name);

		return $singer;
	}

	/**
	* @param @genre string
	* @return Singer
	*/
	public function orderByGenres(string $genre): Singer
	{
		$singer = $this->repository->orderByGenres($genre);

		return $singer;
	}

	/**
	* @param @year int
	* @return Singer
	*/
	public function orderByYears(string $year): Singer
	{
		$singer = $this->repository->orderByYears($year);

		return $singer;
	}

	public function getSinger(): Singer
    {
        $singer = $this->repository->getSinger();

        return $singer;
    }
 }
