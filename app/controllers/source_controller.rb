class SourceController < ApplicationController

    before_action :collection_source_params, only: [:collection_source]
  
    def collection_source_search
  
        client = NYCGeoClient::Client.new(app_id: ENV["NYC_GEOCLIENT_APP_ID"], app_key: ENV["NYC_GEOCLIENT_PROJECT_APP_KEY"])

        collection_query_results = client.address(
          house_number: collection_source_params["house_number"], 
          street: collection_source_params["street"], 
          borough: collection_source_params["borough"]
        )

        return_obj = {}

        collection_query_results["address"].each_pair do |k, v|

          if k.to_s.include? "sanitation"

            return_obj[k] = v

          end


        end

        return_obj['full_address'] = collection_source_params['fullAddress'];

        render :json => return_obj
  
    end
  
    private
  
    def collection_source_params
      
      params.permit!

    end



  end
  