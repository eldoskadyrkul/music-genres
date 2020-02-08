<?php
declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Class Singer
 * @package App\Singer
 * @ORM\Entity(repositoryClass="App\Repository\SingerRepository")
 */
class Singer
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name_singer;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name_song;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $genres_song;

    /**
     * @ORM\Column(type="integer")
     */
    private $year_song;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameSinger(): ?string
    {
        return $this->name_singer;
    }

    public function setNameSinger(string $name_singer): self
    {
        $this->name_singer = $name_singer;

        return $this;
    }

    public function getNameSong(): ?string
    {
        return $this->name_song;
    }

    public function setNameSong(string $name_song): self
    {
        $this->name_song = $name_song;

        return $this;
    }

    public function getGenresSong(): ?string
    {
        return $this->genres_song;
    }

    public function setGenresSong(string $genres_song): self
    {
        $this->genres_song = $genres_song;

        return $this;
    }

    public function getYearSong(): ?int
    {
        return $this->year_song;
    }

    public function setYearSong(int $year_song): self
    {
        $this->year_song = $year_song;

        return $this;
    }

    public function __construct(string $name_singer, string $name_song, string $genres_song, int $year_song)
    {
        $this->name_singer = $name_singer;
        $this->name_song = $name_song;
        $this->genres_song = $genres_song;
        $this->year_song = $year_song;
    }
}
