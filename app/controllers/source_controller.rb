class SourceController < ApplicationController

    before_action :index_params, only: [:index]
  
    def index
  
      puts index_params.inspect
      puts index_params.inspect
      puts index_params.inspect

      render :json => { test: 'hi' }
  
    end
  
    private
  
    def index_params
      
      params.permit!
      
    end

  end
  