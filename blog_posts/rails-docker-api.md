---
title: "Rails Docker API"
date: "2021-03-18"
---

# Ruby on Rails backend Api

The purpose of this is to learn how to set up a rest api using ruby on rails on docker

#### Objectives

- Create a ruby on rails backed using docker
- Create an apartments endpoint
- Load the dummy data via seeds
- Run some testing for routes
- Serve the json data by visiting localhost:3030/listings

## Steps

- Create a gemfile in the folder where I want to create the api
- add to the Gemfile `source 'https://rubygems.org'` and `gem 'rails'`
- Create a Gemfile.lock along side the Gemfile
- Create a docker file for the rails application alongside the other files
- Go up one dicretory and create the docker-compose file using the instructions from
- https://www.youtube.com/watch?v=a-jcTib9ZPA
- https://docs.docker.com/compose/rails/
- https://rapidapi.com/blog/how-to-build-an-api-in-ruby/

### Database model setup

- Because the api needs seed data run: `docker-compose run --no-deps backend rails new . --api --force --database=postgresql --skip-bundle`
- Setup the database in `config/database.yml`
- add the `hosts` , `username` and `password`
- Then run: `docker-compose build` to finalize the installation
- Run `docker-compose up` to get the applications running
- Then you need to create the database by running : `docker-compose run backend rake db:create`
- Let’s start by generating the Apartment model
  `docker-compose run backend rails g model Apartment title:string price:integer sqm:integer bedroom:integer bathroom:integer picture:string`
- Then migrate the database by running : `docker-compose run backend rails db:migrate`
- Now that our models are all setup, let’s generate the controllers `docker-compose run backend rails g controller Apartments`
- Create the seeds in the database and run `docker-compose run backend rails db:seed`

#### Testing

- add the `rspec-rails` gem to the gemfile

```Gemfile
group :development :test do
    # Other dev gems ...
    gem 'rspec-rails'
end
```

- add the `faker` gem to the gemfile to the
-

```Gemfile
group :test do
    gem 'factory_bot_rails'
    gem 'faker'
end
```

- add the `factory_bot_rails` gem to the gemfile
- Install the bundle by running `docker-compose build` the application again
- run `docker-compose up` to test that everything is okay
- In another terminal, run `docker-compose run backend rails generate rspec:install`
- Create a factories directory (factory bot uses this as the default directory). This is where we’ll define the model factories.
  `mkdir spec/factories`
- Add configuration in `spec/rails_helper.rb`
  [config example](https://www.digitalocean.com/community/tutorials/build-a-restful-json-api-with-rails-5-part-one)

### Testing model setup

- Add a requests folder to the spec directory with the corresponding spec files
  `mkdir spec/requests && touch spec/requests/apartments_spec.rb`
- Add the factory files: `spec/factories/apartments.rb`
- Add the tests for the routes
- Run the tests `docker-compose run backend bundle exec rspec`
