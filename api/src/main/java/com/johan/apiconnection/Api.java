package com.johan.apiconnection;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Api {
	public static String doConnection() throws IOException,InterruptedException{
		HttpRequest request = HttpRequest.newBuilder()
				.uri(URI.create("https://metacriticapi.p.rapidapi.com/games"))
				.header("X-RapidAPI-Key", "2d722198bamsh296e12d96b3d3f3p12b2bbjsna178323de380")
				.header("X-RapidAPI-Host", "metacriticapi.p.rapidapi.com")
				.method("GET", HttpRequest.BodyPublishers.noBody())
				.build();
		HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
		System.out.println(response.body().toString());
		String datajson = response.body().toString();
		
		return datajson;
	}

}
