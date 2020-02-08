<?php
declare(strict_types=1);

namespace App\Repository;

use App\Entity\Singer;


/**
 * @method Singer|null find($id, $lockMode = null, $lockVersion = null)
 * @method Singer|null findOneBy(array $criteria, array $orderBy = null)
 * @method Singer[]    findAll()
 * @method Singer[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
interface SingerRepositoryInterface
{
	/**
	* @return Singer[]
	*/
	public function all():array;

	/**
	* @param @id int
	* @return Singer
	*/
	public function one(int $id): Singer;

	/**
	* @param Singer $singer
	* @return Singer
	*/
	public function save(Singer $singer): Singer;
	
	/**
	* @param Singer $singer
	* @return Singer
	*/
	public function update(Singer $singer): Singer;	

	/**
	* @param @name string
	* @return Singer
	*/
	public function orderByName(string $name): Singer;

	/**
	* @param @genre string
	* @return Singer
	*/
	public function orderByGenres(string $genre): Singer;

	/**
	* @param @year int
	* @return Singer
	*/
	public function orderByYears(string $year): Singer;

	public function getSinger(): array;

}
