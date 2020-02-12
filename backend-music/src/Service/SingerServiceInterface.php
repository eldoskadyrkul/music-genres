<?php
declare(strict_types=1);

namespace App\Service;

use App\Entity\Singer;

interface SingerServiceInterface 
{
	/**
	* @param string $name_singer
	* @param string $name_song
	* @param string $genres_song
	* @param int $year_song
	* @return Singer
	*/
	public function create(string $name_singer, string $name_song, string $genres_song, int $year_song): Singer;	

	/**
	* @param @name string
	* @return Singer
	*/
	public function orderByName(string $name): array;

	/**
	* @param @genre string
	* @return Singer
	*/
	public function orderByGenres(string $genre): array;

	/**
	* @param @year int
	* @return Singer
	*/
	public function orderByYears(string $year): array;

    /**
     * @return array
     */
	public function getSinger(): array;

	/**
	 * @return array
	*/
	public function paginate(int $page, int $limit): array;
}
