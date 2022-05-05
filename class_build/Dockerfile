FROM node:14

# RUN mkdir class_build 굳이 따로 만들 필요 없음
WORKDIR /class_build/
COPY . /class_build/

RUN yarn install
RUN yarn build:ssr
CMD yarn start


# RUN yarn start와 CMD yarn start의 차이! RUN은 원하는대로 실행가능, CMD는 한번만 실행 가능
# RUN yarn start