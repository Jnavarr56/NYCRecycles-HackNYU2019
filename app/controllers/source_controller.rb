class SourceController < ApplicationController

    before_action :collection_source_params, only: [:collection_source]
  
    def collection_source_search
  
        client = NYCGeoClient::Client.new(app_id: ENV["NYC_GEOCLIENT_APP_ID"], app_key: ENV["NYC_GEOCLIENT_PROJECT_APP_KEY"])

        puts collection_source_params

        puts client.address(
          house_number: collection_source_params['house_number'], 
          street: collection_source_params['street'], 
          borough: collection_source_params['borough']
        ).inspect


        render :json => { test: 'hi' }
  
    end
  
    private
  
    def collection_source_params
      
      params.permit!

    end



  end
  