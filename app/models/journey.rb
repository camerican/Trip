class Journey < ApplicationRecord
	has_many :users, :through => :user_journeys
	has_many :user_journeys
end
