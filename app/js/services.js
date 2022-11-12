const getDateAndTime=()=>{
		const fullDate = new Date(); 
		
		const currentDate = "Поточна дата: " 
				+ fullDate.getDate() + "/"
                + (fullDate.getMonth()+1)  + "/" 
                + fullDate.getFullYear(); 

		const currentTime = "Поточний час: "
                + fullDate.getHours() + ":"  
                + fullDate.getMinutes() + ":" 
                + fullDate.getSeconds();
				
		const currentDateTime = currentDate + "\n" + currentTime;
		
		return currentDateTime;
	}