package com.johan.apiconnection;

import java.io.IOException;
import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.johan.apiconnection.Api;

public class Main {

	public static void main(String[] args) throws IOException, InterruptedException {
		
		try
		{
	       //create Gson instance
	        Gson gson = new Gson();

	        // Connection with MySQLDB
	        Connection con = DriverManager.getConnection("jdbc:mysql://localhost/db_collectionofgames", "root", "yuho54zx1");
	        Statement st = con.createStatement();

	        // create a reader
	        Reader reader = Files.newBufferedReader(Paths.get("D:\\escritorio\\clases\\2 DAM\\PGL\\GameData.json"));

	        // convert JSON array to list of users
	        List<GameSchema> games = new Gson().fromJson(reader, new TypeToken<List<GameSchema>>() {
	        }.getType());

	        String reset = "ALTER TABLE db_collectionofgames.api AUTO_INCREMENT = 1;";
	        st.execute(reset);
	        String delete = "Delete from db_collectionofgames.api where id >= 0;";
	        st.execute(delete);
	        games.forEach((x) -> {
	            try {
	            	
	            	
	                // Query MySQLDB
	            	String query = "INSERT INTO db_collectionofgames.api( platform, developer, title, description, genre, thumbnail_url, meta_score, user_score,release_date,recent_reviews,recent_user_reviews) "
                            + "VALUES ( \""+x.getPlatform()+"\",\""+x.getDeveloper()+"\",\""+x.getTitle()+"\",\""+x.getDescription()+"\",\""+x.getGenre()+"\",\""+x.getThumbnailUrl()+"\","+x.getMetaScore()+","+x.getUserScore()+",\""+x.getReleaseDate()+"\",\""+x.getRecentReviews()+"\",\""+x.getRecentUserReviews()+"\")";
	                st.execute(query);
	            } catch (SQLException e) {
	                // TODO Auto-generated catch block
	                e.printStackTrace();
	                System.out.println("Mal");
	            }
	        });

	        // close connection
	        con.close();

	        // close reader
	        reader.close();

	    }catch(
		Exception ex)
		{
			ex.printStackTrace();
		}

	}

}
