class HomeController < ApplicationController
  def index
  	if session[:logged_in] == true
  		puts "Logged in!"
  		@username = session[:username]
  	else
  		redirect_to :action=>'login'
  	end
  end

  def logout
  	# "Delete" a login, aka "log the user out"
    session[:logged_in] = nil
    redirect_to root_url
  end


  def login
  	if request.post?
  		#Some sort of user authentication
  		if params[:username] == 'dhubble' && params[:password] == 'sample'
  			# Save the user ID in the session to be used in subsequent requests
      		session[:logged_in] = true
      		session[:username] = params[:username]
      		redirect_to root_url
      	end
  	else
  		#Simply render the form
  	end
  end

  def register
  	#Create an entry in a database
  end
end
