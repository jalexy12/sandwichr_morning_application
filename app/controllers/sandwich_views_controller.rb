class SandwichViewsController < ApplicationController
	def index
		@sandwiches = Sandwich.all
	end

	def show
		@sandwich = Sandwich.includes(:ingredients).find_by(id: params[:id])
	end
end
