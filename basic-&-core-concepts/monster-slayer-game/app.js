const calculateDamage = (max, min) => Math.floor(Math.random() * (max - min)) + min

Vue.createApp({
	data() {
		return {
			playerHealth: 100,
			monsterHealth: 100,
			currentRound: 0,
			winner: null,
			logs: [],
		}
	},
	methods: {
		attackMonster() {
			this.currentRound++
			const damage = calculateDamage(12, 5)
			this.monsterHealth -= damage
			this.addLogMessage('player', 'attack', damage)
			this.attackPlayer()
		},
		attackPlayer() {
			const damage = calculateDamage(15, 8)
			this.playerHealth -= damage
			this.addLogMessage('monster', 'attack', damage)
		},
		attackMonsterSpecial() {
			this.currentRound++
			const damage = calculateDamage(25, 10)
			this.monsterHealth -= damage
			this.addLogMessage('player', 'special-attack', damage)
			this.attackPlayer()
		},
		healPlayer() {
			this.currentRound++
			const health = calculateDamage(20, 8)
			this.playerHealth = this.playerHealth + health > 100 ? 100 : this.playerHealth + health
			this.addLogMessage('player', 'heal', health)
			this.attackPlayer()
		},
		restartGame() {
			this.playerHealth = 100
			this.monsterHealth = 100
			this.currentRound = 0
			this.winner = null
			this.logs = []
		},
		surrender() {
			this.winner = 'monster'
		},
		addLogMessage(who, what, value) {
			this.logs.unshift({
				actionBy: who,
				actionType: what,
				actionValue: value,
			})
		},
	},
	computed: {
		monsterHealthBar() {
			return { width: this.monsterHealth < 0 ? '0%' : this.monsterHealth + '%' }
		},
		playerHealthBar() {
			return { width: this.playerHealth < 0 ? '0%' : this.playerHealth + '%' }
		},
		isSpecialAttackAvailable() {
			return this.currentRound % 3 !== 0
		},
	},
	watch: {
		playerHealth(value) {
			if (value <= 0 && this.monsterHealth <= 0) {
				this.winner = 'draw'
			} else if (value <= 0) {
				this.winner = 'monster'
			}
		},
		monsterHealth(value) {
			if (value <= 0 && this.playerHealth <= 0) {
				this.winner = 'draw'
			} else if (value <= 0) {
				this.winner = 'player'
			}
		},
	},
}).mount('#game')
