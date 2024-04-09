/*Gifted Tech*/


FROM node:16
RUN git clone https://github.com/giftedtechnexus/Gifted-Md /root/Gifted
WORKDIR /root/Gifted
RUN npm install
EXPOSE 3000
CMD ["npm","start" ] 
#GIFTED
