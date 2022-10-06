package com.johan.apiconnection;

public class GameSchema {

	private long id;
	private String platform;
	private String title;
	private String description;
	private String genre;
	private String thumbnailUrl;
	private int metaScore;
	private int userScore;
	private String releaseDate;

	
	
	
	public GameSchema(long id, String platform, String title, String description, String genre,
			String thumbnailUrl, int metaScore, int userScore, String releaseDate) {
		super();
		this.id = id;
		this.platform = platform;
		this.title = title;
		this.description = description;
		this.genre = genre;
		this.thumbnailUrl = thumbnailUrl;
		this.metaScore = metaScore;
		this.userScore = userScore;
		this.releaseDate = releaseDate;
	}
	public String getPlatform() {
		return platform;
	}
	public void setPlatform(String platform) {
		this.platform = platform;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public String getThumbnailUrl() {
		return thumbnailUrl;
	}
	public void setThumbnailUrl(String thumbnailUrl) {
		this.thumbnailUrl = thumbnailUrl;
	}
	public int getMetaScore() {
		return metaScore;
	}
	public void setMetaScore(int metaScore) {
		this.metaScore = metaScore;
	}
	public int getUserScore() {
		return userScore;
	}
	public void setUserScore(int userScore) {
		this.userScore = userScore;
	}
	public String getReleaseDate() {
		return releaseDate;
	}
	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
}
